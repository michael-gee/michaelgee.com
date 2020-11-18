import { Form, Button, Input, TextArea, Icon, Loader } from 'semantic-ui-react'
import { useContactForm } from './useContactForm'
import styles from './Form.module.css'

export const ContactForm = () => {
  const { isSubmitting, errorMessage, onInputChange, onSubmit } = useContactForm()

  return (
    <Form onSubmit={onSubmit} id={styles.form}>
      <div className={styles.userInfo}>
        <Input
          name="name"
          onChange={onInputChange}
          placeholder="Full Name"
          icon="user"
          iconPosition="left"
        />
        <Input
          name="email"
          onChange={onInputChange}
          placeholder="Email Address"
          icon="at"
          iconPosition="left"
        />
      </div>

      <TextArea name="text" onChange={onInputChange} placeholder="Your Message" rows="5" />

      <Input type="text" name="_gotcha" onChange={onInputChange} style={{ display: 'none' }} />

      <div className={styles.submitContainer}>
        <Button type="submit" id={styles.submitBtn} disabled={isSubmitting}>
          <Icon name="send" />
          Send Message
        </Button>

        {isSubmitting && <Loader active inline className={styles.loadingSpinner} />}

        {!isSubmitting && errorMessage && (
          <div className={styles.error}>
            <Icon name="warning sign" />
            <span>{errorMessage}</span>
          </div>
        )}
      </div>
    </Form>
  )
}
