import React, { useState } from 'react'
import { Button } from '../../components/Button'
import { Container } from '../../components/Container'
import Input from '../../components/Input'

function SecondScreen () {
  const [ payValue, setPayValue ] = useState('')
  const [ isFormValid, setisFormValid ] = useState(false)
  // if (payValue.length > 5) alert('lol'§)
  return (
    <Container>
      <Input onChange={value => setPayValue(value)} value={payValue} />
      <Button
        disabled={isFormValid} 
        onClick={() => setisFormValid(!isFormValid)}>Exchange</Button>
    </Container>
  )
}

export default SecondScreen