import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const TELEGRAM_BOT_TOKEN = Deno.env.get("TELEGRAM_BOT_TOKEN");
const TELEGRAM_CHAT_ID = "145254390";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  phone: string;
  email: string;
  message: string;
  captcha: number;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone, email, message, captcha }: ContactRequest = await req.json();

    console.log("Received contact form submission:", { name, phone, email, captcha });

    // Validate captcha is provided
    if (!captcha) {
      console.error("Captcha not provided");
      return new Response(
        JSON.stringify({ error: "Пожалуйста, решите капчу" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Format message for Telegram
    const telegramMessage = `
🔔 Новое обращение с сайта

👤 Имя: ${name}
📞 Телефон: ${phone}
📧 Email: ${email}

💬 Сообщение:
${message}
    `.trim();

    console.log("Sending message to Telegram");

    // Send to Telegram
    const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const telegramResponse = await fetch(telegramUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: telegramMessage,
        parse_mode: "HTML",
      }),
    });

    const telegramData = await telegramResponse.json();
    console.log("Telegram API response:", telegramData);

    if (!telegramResponse.ok) {
      console.error("Telegram API error:", telegramData);
      throw new Error(`Telegram API error: ${JSON.stringify(telegramData)}`);
    }

    return new Response(
      JSON.stringify({ success: true, message: "Сообщение успешно отправлено" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-to-telegram function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Произошла ошибка при отправке" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
