// components/Home.tsx
import React from 'react'
import Image from 'next/image'
import { Carousel, Col, Row } from 'antd'

import banner1 from '../assets/images/finace_banner_1.png'
import banner2 from '../assets/images/finace_banner_2.png'
import tp1 from '../assets/images/logos.png'
import tp2 from '../assets/images/logos (1).png'
import tp3 from '../assets/images/logos (2).png'
import tp4 from '../assets/images/logos (3).png'
import tp5 from '../assets/images/logos (4).png'
import tp6 from '../assets/images/logos (5).png'
import logo1 from '../assets/images/invescore-financial-group-logo.jpeg'
import logo2 from '../assets/images/gsb-capital-logo.png'
import logo3 from '../assets/images/money-logo.png'
import logo4 from '../assets/images/pocker-logo.png'
import logo5 from '../assets/images/nomin-logo.png'
import FadeIn from './components/fadein'
import ProductListCard from './components/product-card'
import prodLosImg from '../assets/images/LOS.png'
import prodCbsImg from '../assets/images/CBS.png'

const Home: React.FC = () => {
  const data = [
    {
      id: 1,
      title: 'Зээлийн шийдвэр гаргалт, удирдлагын систем - LOS',
      description:
        'Зээл олгох үйл явцыг бүхэлд нь автоматжуулж зээлийн судалгаа, шийдвэр гаргалт, олголт зэрэг олон боломжуудыг багтаасан систем болно.',
      list: [
        { description: 'Процесс менежмент' },
        { description: '3-дагч системийн холболт' },
        { description: 'Тайлангийн модуль' },
        { description: 'Хар саарал жагсаалт' },
        { description: 'Хяналт' },
        { description: 'Барьцаа хөрөнгө' },
        { description: 'Хандах эрхийн зохицуулалт' },
        { description: 'Харилцагчийн бүртгэл мэдээлэл (CRM)' },
      ],
      img: prodLosImg,
    },
    {
      id: 2,
      title: 'Банкны үндсэн систем',
      description: '',
      list: [
        { description: 'Main configuration' },
        { description: 'Санхүүгийн бүтээгдэхүүн' },
        { description: 'Ерөнхий дэвтэр' },
        { description: 'Corporate gateway' },
        { description: 'Өдөр өндөрлөгөө' },
        { description: 'Тайлан' },
        { description: 'Балансын гадуурх бүртгэл (нэмэлтээр)' },
        { description: 'Эрсдлийн сан байгуулах (нэмэлтээр)' },
      ],
      img: prodCbsImg,
    },
  ]

  return (
    <div className="home-sections">
      <div className="particle-canvas">
        <FadeIn sectionId={'section1'}>
          <div className="motto">
            <div>
              <h2>
                Санхүүгийн байгууллагын үндсэн систем ашиглахтай холбоотой бүхий л асуудлыг цогцоор
                шийдсэн
              </h2>
              <h3>Эрсдэлээс өөрийн байгууллагыг хамгаалах 24/7 үйлчилгээг бид танд санал болгож байна</h3>
            </div>
          </div>
        </FadeIn>

        <FadeIn sectionId={'section2'}>
          <div className="about-us">
            <div className="section-name">
              <p>Бидний тухай</p>
            </div>
            <Row justify="center" align="middle">
              <Col sm={24} md={8} lg={12}>
                <div className="about-us-info">
                  <h2>FinAce-г хөгжүүлэгч</h2>
                  <h4 className="desc">
                    AILAB-чууд бид финтек, хиймэл оюун, их өгөгдлийн систем хөгжүүлэх, тэдгээрийн суурь
                    дэд бүтцийг зохион байгуулах чиглэлээр мэргэшсэн технологи хөгжүүлэгч компани юм.
                  </h4>
                </div>
              </Col>
              <Col
                sm={24}
                md={16}
                lg={12}
                style={{ justifyContent: 'flex-end', alignItems: 'center', display: 'flex' }}
              >
                <div className="slide">
                  <Carousel autoplay autoplaySpeed={5000}>
                    {[banner1, banner2].map((banner, i) => (
                      <div key={i} style={{ position: 'relative', width: '100%', height: 300 }}>
                        <Image
                          src={banner}
                          alt={`banner${i + 1}`}
                          layout="fill"
                          objectFit="cover"
                          priority={true}
                        />
                        <div className="slider-item">
                          {i === 0 && (
                            <>
                              <h3>Банкны үндсэн систем</h3>
                              <h5>
                                Finace core banking system нь зээлийн дансны бүртгэл, ерөнхий дэвтэрийн
                                модуль бүхий 24/7 тасралтгүй, найдвартай ажиллах cloud систем юм.
                              </h5>
                            </>
                          )}
                          {i === 1 && (
                            <>
                              <h3>Зээлийн удирдлагын систем</h3>
                              <h5>Зээлийн судалгааны системийн бүрэн төгс шийдэл.</h5>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </Carousel>
                </div>
              </Col>
            </Row>
          </div>
        </FadeIn>

        <FadeIn sectionId={'section6'}>
          <div className="experience">
            <p>Бидний туршлага</p>
            <Carousel autoplay dots={false} slidesToShow={3} autoplaySpeed={2000} pauseOnHover draggable infinite>
              {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
                <div
                  key={index}
                  style={{
                    height: '250px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image src={logo} alt={`logo${index + 1}`} width={200} height={150} objectFit="contain" />
                </div>
              ))}
            </Carousel>
          </div>
        </FadeIn>

        <FadeIn sectionId={'section7'}>
          <div className="sw-product-list">
            <p>Бүтээгдэхүүнүүд</p>
            <h1>Finace цогц системийн бүрдэл бүтээгдэхүүнүүд</h1>
            {data.map((product) => (
              <div style={{ marginTop: '40px' }} key={product.id}>
                <ProductListCard product={product} />
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn sectionId={'section8'}>
          <div className="third-party">
            <p>Гуравдагч талууд</p>
          </div>
          <Row>
            <Col xs={24} sm={24} md={24} lg={7} xl={7}>
              <div className="sw-home-tp-text">
                <h1>
                  Гуравдагч системийн
                  <br />
                  холболтууд
                </h1>
                <h3>
                  Харилцагчийг таних, зээлийн үнэлгээ скоринг тооцох, банкны гүйлгээ хийхтэй холбоотой автомат
                  удирдлагын системийн холболтуудыг Finace -д багтаасан.
                </h3>
              </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={2} xl={2}></Col>
            <Col xs={24} sm={24} md={24} lg={15} xl={15}>
              <Row justify="center" className="tp" gutter={[16, 16]}>
                {[tp1, tp4, tp2, tp5, tp3, tp6].map((tp, i) => (
                  <Col key={i}>
                    <Image src={tp} alt={`tp${i + 1}`} width={100} height={60} objectFit="contain" />
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </FadeIn>

        <FadeIn sectionId={'section9'}>
          <div className="vision">
            <p>Алсын хараа</p>
            <h4>Дэлхий ашиглах санхүүгийн технологи бүтээгч байна.​</h4>
          </div>
        </FadeIn>
      </div>
    </div>
  )
}

export default Home
