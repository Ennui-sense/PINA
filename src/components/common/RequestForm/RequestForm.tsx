import "./RequestForm.scss"

import Button from "~/components/ui/Button/Button"

const RequestForm = () => {
  return (
    <form className="request-form" action="">
      <div className="request-form__fields">
        <div className="request-form__field">
          <label htmlFor="name" className="request-form__label">Имя *</label>
          <input type="text" className="request-form__input" id="name" name="name" placeholder="Как к вам обращаться" />
        </div>
        <div className="request-form__field">
          <label htmlFor="contact" className="request-form__label">Телефон или telegram *</label>
          <input type="number" className="request-form__input" id="contact" name="contact" />
        </div>
        <div className="request-form__field">
          <label htmlFor="date" className="request-form__label">Дата события</label>
          <input type="date" className="request-form__input" id="date" name="date" />
        </div>
        <div className="request-form__field">
          <label htmlFor="count" className="request-form__label">Количество гостей</label>
          <input type="number" className="request-form__input" id="count" name="count" />
        </div>
        <div className="request-form__field">
          <label htmlFor="format" className="request-form__label">Формат события</label>
          <input type="text" className="request-form__input" id="format" name="format" />
        </div>
        <div className="request-form__field">
          <label htmlFor="comment" className="request-form__label">Комментарий</label>
          <textarea name="comment" id="comment" className="request-form__input request-form__textarea" rows={10} maxLength={900}></textarea>
        </div>
      </div>

      <div className="request-form__sending">
        <Button className="request-form__button" type="submit">Отправить</Button>
        <p className="request-form__text">* Отправляя форму, вы соглашаетесь на обработку персональных данных</p>
      </div>
    </form>
  )
}

export default RequestForm
