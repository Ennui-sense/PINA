import type { RequestFormValues } from "~/schemas/requestSchema";

export function formatMessage(data: RequestFormValues) {
  let message = `
<b>Новая заявка на бар!</b>

<b>Имя</b>: ${data.name};
<b>Номер телефона</b>: <code>${data.contact}</code>`;

  if (Object.values(data).filter((value) => value)) {
    message += `\n\nДополнительная информация:\n\n`;
  }

  if (data.date) {
    message += `<b>Дата мероприятия</b>: ${data.date}\n`;
  }

  if (data.guests) {
    message += `<b>Количество гостей</b>: ${data.guests}\n`;
  }

  if (data.eventFormat) {
    message += `<b>Формат мероприятия</b>: ${data.eventFormat}\n`;
  }

  if (data.comment) {
    message += `<b>Комментарий</b>: ${data.comment}`;
  }

  return message;
}
