# MADAM MOO — Website

نسخة كاملة ومحسّنة من موقع MADAM MOO تعمل بـ HTML/CSS/JavaScript بدون Backend.

## التشغيل في Visual Studio Code

1. فكّي الضغط عن الملف.
2. افتحي مجلد `MADAM-MOO-WEBSITE` في Visual Studio Code.
3. افتحي `index.html`.
4. شغّلي الموقع بواسطة Live Server (يفضل) أو افتحي `index.html` مباشرة في المتصفح.

## تعديل الأسعار والمنتجات

كل المنتجات والأسعار موجودة في:
`data.js`

## رقم واتساب الدليفري

موجود في `data.js`:
`201039456864`

## الدليفري

حاليًا `deliveryFee: 0` لأن سعر الدليفري لم يتم تحديده.
لو عندكم سعر ثابت، غيّري الرقم في `data.js`.

## ملاحظة مهمة عن WhatsApp

الزر يفتح WhatsApp على رقم المطعم ويجهز رسالة الأوردر كاملة تلقائيًا.
العميل يحتاج يضغط "Send" داخل WhatsApp.

الإرسال التلقائي بدون تدخل العميل يحتاج WhatsApp Business Cloud API + Backend.
