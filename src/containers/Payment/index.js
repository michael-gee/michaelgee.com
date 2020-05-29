import Head from 'next/head'
import { Button, Icon, Input, Loader, Statistic } from 'semantic-ui-react'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/router'

import styles from './Payment.module.css'

const PAYMENT_STEPS = {
  price: 'price',
  checkout: 'checkout'
}

export const Payment = () => {
  const [currentStep, setCurrentStep] = useState(PAYMENT_STEPS.price)
  const [price, setPrice] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)
  const [error, setError] = useState(null)
  const paypalRef = useRef()
  const router = useRouter()

  useEffect(() => {
    setError(null)

    if (currentStep === PAYMENT_STEPS.checkout) {
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: 'Payment to Michael Gee for one of various services or products.',
                  amount: {
                    currency_code: 'USD',
                    value: price
                  }
                }
              ]
            })
          },
          onApprove: async (data, actions) => {
            setIsProcessing(true)
            const order = await actions.order.capture()
            if (order.status.toLowerCase() === 'completed') router.push('/success')
          },
          onError: err => {
            if (isProcessing) setIsProcessing(false)
            setError(err)
          }
        })
        .render(paypalRef.current)
    }
  }, [currentStep])

  return (
    <>
      <Head>
        <title>Payment | Michael Gee</title>
        <meta
          name="description"
          content="Individual payments/contributions to Michael Gee for various services or products."
        />
      </Head>

      <main id="page">
        <div className="page-body" style={{ maxWidth: 600, maxHeight: 524 }}>
          <>
            <h1 className="page-title">Payment & Contributions</h1>
            {_renderCurrentStep()}
          </>
        </div>
      </main>
    </>
  )

  function _renderCurrentStep() {
    if (isProcessing) {
      return (
        <div id={styles.processing}>
          <Loader active inline="centered" size="big">
            Processing Payment...
          </Loader>
        </div>
      )
    }

    if (currentStep === PAYMENT_STEPS.price) {
      // Price step
      return (
        <div id={styles.price}>
          <Input
            value={price || ''}
            onChange={_onPriceChange}
            type="number"
            size="massive"
            icon="dollar"
            iconPosition="left"
            placeholder="Dollar Amount"
          />

          {error && (
            <div id={styles.error}>
              <Icon name="warning circle" />
              <span>{error.message}</span>
            </div>
          )}

          <Button size="large" onClick={_onSubmitPrice}>
            <span>Proceed</span>
            <Icon name="arrow right" />
          </Button>

          <img src="/images/paypal.png" alt="Powered by Paypal" />
        </div>
      )
    }

    // Checkout step
    return (
      <div id={styles.checkout}>
        {error && (
          <div id={styles.error}>
            <Icon name="warning circle" />
            <span>{error.message}</span>
          </div>
        )}
        <Button onClick={_onBackButtonClick} id={styles.backBtn}>
          <Icon name="arrow left" />
          <span>Back</span>
        </Button>

        <Statistic size="large">
          <Statistic.Label>Amount</Statistic.Label>
          <Statistic.Value>${price}</Statistic.Value>
        </Statistic>

        <div id={styles.paypal} ref={paypalRef} />
      </div>
    )
  }

  function _onPriceChange(ev, data) {
    if (Number(data.value) < 0) return
    setPrice(Number(data.value))
  }

  function _onSubmitPrice() {
    if (price === '' || price === 0) {
      setError({ message: 'Please specify a payment amount before proceeding to checkout.' })
      return
    }

    setCurrentStep(PAYMENT_STEPS.checkout)
  }

  function _onBackButtonClick() {
    setCurrentStep(PAYMENT_STEPS.price)
  }
}
