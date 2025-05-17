import React from 'react'
import { Button, Col, Row } from 'antd'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'

interface ProductItem {
  description: string
}

interface Product {
  id: number
  title: string
  description: string
  list: ProductItem[]
  img: string | StaticImageData
}

interface ProductListCardProps {
  product: Product
}

const ProductListCard: React.FC<ProductListCardProps> = ({ product }) => {
  return (
    <Row justify="center" style={{ width: '100%' }}>
      <Col span={19} className="product-container">
        <Row gutter={0} align="stretch" justify="center">
          <Col xl={12} lg={24} md={24} sm={24} xs={24}>
            <Row gutter={[70, 20]}>
              <Col lg={24} md={24} sm={24} xs={24} style={{ padding: '10px' }}>
                <h2><strong>{product.title}</strong></h2>
                <h3>{product.description}</h3>
                <ul>
                  {product.list.map((item, index) => (
                    <li key={index}>{item.description}</li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Col>

          <Col xl={1}></Col>

          <Col xl={11} lg={24} md={24} sm={24} xs={24}>
            <Row gutter={[10, 20]} justify="end" style={{ paddingLeft: '10px' }}>
              <Col style={{ width: '100%', maxWidth: '500px' }}>
                <div style={{ position: 'relative', width: '100%', height: 'auto', aspectRatio: '4 / 3' }}>
                  <Image
                    src={product.img}
                    alt="product"
                    fill
                    style={{
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                    className="green-border"
                  />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default ProductListCard
