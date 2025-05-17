'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'
import { Modal, Input, Row, Col, message as Message } from 'antd'
import ContactService from '../services/contact.service'

interface ContactModalContextType {
  visible: boolean
  openModal: () => void
  closeModal: () => void
}

const ContactModalContext = createContext<ContactModalContextType>({
  visible: false,
  openModal: () => {},
  closeModal: () => {},
})

export const useContactModal = () => useContext(ContactModalContext)

interface ContactModalProviderProps {
  children: ReactNode
}

export const ContactModalProvider = ({ children }: ContactModalProviderProps) => {
  const [visible, setVisible] = useState(false)
  const openModal = () => setVisible(true)
  const closeModal = () => setVisible(false)

  return (
    <ContactModalContext.Provider value={{ visible, openModal, closeModal }}>
      {children}
      <ContactForm visible={visible} closeModal={closeModal} />
    </ContactModalContext.Provider>
  )
}

// Define form keys
type FormKeys = 'email' | 'companyName' | 'phoneNum' | 'message'

interface ContactFormProps {
  visible: boolean
  closeModal: () => void
}

const ContactForm = ({ visible, closeModal }: ContactFormProps) => {
  const [formData, setFormData] = useState<Record<FormKeys, string>>({
    email: '',
    companyName: '',
    phoneNum: '',
    message: '',
  })

  const placeholders: { label: string; value: Exclude<FormKeys, 'message'> }[] = [
    { label: 'Имэйл :', value: 'email' },
    { label: 'Компанийн нэр :', value: 'companyName' },
    { label: 'Утасны дугаар :', value: 'phoneNum' },
  ]

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement> | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target
    if (['email', 'companyName', 'phoneNum', 'message'].includes(name)) {
      setFormData((prevData) => ({ ...prevData, [name]: value }))
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await ContactService.createContactTenant(formData)
      Message.success(response?.data?.message || 'Амжилттай илгээгдлээ')
      clearForm()
      closeModal()
    } catch (error) {
      Message.error('Илгээхэд алдаа гарлаа')
    }
  }

  const clearForm = () => {
    setFormData({
      email: '',
      companyName: '',
      phoneNum: '',
      message: '',
    })
  }

  return (
    <Modal
      open={visible}
      onCancel={closeModal}
      onOk={handleSubmit}
      okText="Илгээх"
      cancelText="Болих"
      title="Бидэнтэй холбогдох"
    >
      <Row gutter={[10, 10]}>
        {placeholders.map((placeholder, index) => (
          <Col key={index} span={24}>
            <Input
              placeholder={placeholder.label}
              value={formData[placeholder.value]}
              onChange={handleInputChange}
              name={placeholder.value}
            />
          </Col>
        ))}
        <Col span={24}>
          <p style={{ marginBottom: 4 }}>Компанийн үйл ажиллагааны чиглэл ?</p>
          <Input.TextArea
            placeholder="Чиглэл :"
            value={formData.message}
            style={{ minHeight: 70 }}
            onChange={(e) =>
              handleInputChange({
                target: { name: 'message', value: e.target.value },
              })
            }
          />
        </Col>
      </Row>
    </Modal>
  )
}
