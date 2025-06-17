import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'
import styles from '@/styles/Footer.module.css'
//
import { BsFillEnvelopeFill } from 'react-icons/bs'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs'
import { AiFillBehanceCircle } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
//
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//images
import icon from '../public/images/footer/icon.png'
import icon1 from '../public/images/awards/award1.png'
import icon2 from '../public/images/awards/award2.png'
import icon3 from '../public/images/awards/award3.png'
import icon4 from '../public/images/awards/award4.png'
import icon5 from '../public/images/awards/award5.png'
import icon6 from '../public/images/awards/award6.png'
import icon7 from '../public/images/awards/award7.png'
import icon8 from '../public/images/awards/award8.png'
import icon9 from '../public/images/awards/award9.png'
import icon10 from '../public/images/awards/award10.png'
import icon11 from '../public/images/awards/award11.png'
import apple from '../public/images/apple/apple.svg'


const Footer = () => {

  var awardslogo = {
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    speed: 3000,
    pauseOnHover: false,
    cssEase: 'linear',
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <>

      <section className={styles.footer}>

        <Container>
          <Row className={styles.project}>
            <Col lg={12}>
              <h2 className='font30 fontf font-bold white mb-0 text-center'>
                <span className='grdiant'>Our Partnerships </span> <br />
                and Appraisals!
              </h2>
            </Col>
            <Col lg={12} className={styles.trstCol}>
              <Slider {...awardslogo} className={` ${styles.startup1}  startposition mt-4`}>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon1} width={118} height={118} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon2} width={118} height={118} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon3} width={118} height={118} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon4} width={130} height={118} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon5} width={118} height={118} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon6} className="img-fluid" />
                </div>
                <div className={`${styles.strpImg} ${styles.minImg}`}>
                  <Image alt="BitsWits" src={icon7} width={162} height={52} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon8} width={130} height={118} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon9} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon10} className="img-fluid" />
                </div>
                <div className={styles.strpImg}>
                  <Image alt="BitsWits" src={icon11} className="img-fluid" />
                </div>
              </Slider>
            </Col>
          </Row>

          <Row className={styles.past}>

            <Col lg={9}>

              <div className={styles.footinfofullrelative}>
                <div className={styles.ftrhd}>Industries</div>
                <Link href="/real-estate" title="TII Real Estate"> Real Estate</Link> <span className={styles.cornaer}> | </span>
                <Link href="/travel-hospitality" title="TII Travel and Hospitality"> Travel Hospitality</Link> <span className={styles.cornaer}> | </span>
                <Link href="/b2b-solutions" title="TII B2B Solutions">B2B Solutions</Link> <span className={styles.cornaer}> | </span>
                <Link href="/b2c-solutions" title="TII B2C Solutions"> B2C Solutions</Link> <span className={styles.cornaer}> | </span>
                <Link href="/healthcare" title="TII Healthcare"> Healthcare</Link> <span className={styles.cornaer}> | </span>
                <Link href="/education-and-e-learning" title="TII Education And e-Learning"> Education <span className="text-trans-none">e</span>-Learning </Link> <span className={styles.cornaer}> | </span>
                <Link href="/banking-finance" title="TII Banking And Finance"> Banking Finance</Link> <span className={styles.cornaer}> | </span>
                <Link href="/startup-solutions" title="TII Startup Solutions"> Startup Solutions</Link> <span className={styles.cornaer}> | </span>
                <Link href="/media-publishing" title="TII Media And Publishing"> Media Publishing</Link> <span className={styles.cornaer}> | </span>
                <Link href="/food-ordering-solutions" title="TII Food ordering Solutions Industry"> Food Ordering Solutions</Link> <span className={styles.cornaer}> | </span>
                <Link href="/ticket-booking-solutions" title="TII Train Ticket Booking Solution"> Train Ticket Booking Solutions</Link>
                <div className={styles.ftrhd}>Services</div>
                <Link href="/progressive-web-app-development" title="TII Progressive Web App Development Service">Progressive Web App Development</Link> <span className={styles.cornaer}> | </span>
                <Link href="/mobile-app-development" title="TII Mobile App Development Service">Mobile App Development</Link> <span className={styles.cornaer}> | </span>
                <Link href="/php-development-service" title="TII PHP Development Services">PHP Development Services </Link> <span className={styles.cornaer}> | </span>
                <Link href="/web-development" title="TII Web Development"> Web Development</Link> <span className={styles.cornaer}> | </span>
                <Link href="/game-development" title="TII Game Development"> Game Development</Link> <span className={styles.cornaer}> | </span>
                <Link href="/2d-art" title="TII 2D Art">2D Art</Link> <span className={styles.cornaer}> | </span>
                <Link href="/3d-art" title="TII 3D Art">3D Art</Link> <span className={styles.cornaer}> | </span>
                <Link href="/crm-solution" title="TII CRM Solutions">CRM Solutions</Link> <span className={styles.cornaer}> | </span>
                <Link href="/e-commerence-development" title="TII e-Commerce Development Service">
                  <span className="text-trans-none">e</span>-Commerce Development
                </Link> <span className={styles.cornaer}> | </span>


                <Link href="/search-engine-optimization" title="TII Search Engine Optimization">Search Engine Optimization</Link> <span className={styles.cornaer}> | </span>
                <Link href="/pay-per-click-services" title="TII Pay Per Click Services">Pay Per Click Services</Link> <span className={styles.cornaer}> | </span>
                <Link href="/keyword-research" title="TII Keyword Research">Keyword Research</Link> <span className={styles.cornaer}> | </span>
                <Link href="/link-building" title="TII Link Building">Link Building</Link> <span className={styles.cornaer}> | </span>
                <Link href="/enterprise-mobility-solutions" title="Enterprise Mobility Solution">Enterprise Mobility Solutions</Link> <span className={styles.cornaer}> | </span>
                <Link href="/social-media-optimization" title="TII Social Media Optimization">Social Media Optimization</Link> <span className={styles.cornaer}> | </span>
                <Link href="/internet-of-things" title="TII Internet Of Things">Internet Of Things</Link> <span className={styles.cornaer}> | </span>
                <Link href="/digital-marketing" title="TII Digital Marketing">Digital Marketing</Link> <span className={styles.cornaer}> | </span>
                <Link href="/enterprise-portal-solution" title="TII Enterprise Portal Solution">Enterprise Portal Solution</Link> <span className={styles.cornaer}> | </span>
                <Link href="/magento-enterprise-solution" title="TII Magento Enterprise Solution">Magento Enterprise Solution</Link> <span className={styles.cornaer}> | </span>
                <Link href="/conversion-rate-optimisation" title="TII Conversion Rate Optimisation.html">Conversion Rate Optimisation</Link>
                <div className={styles.ftrhd}>Technologies</div>
                <Link href="/hire-asp-dot-net-developer" title="TII Hire ASP.NET Developer">ASP.NET</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-c-sharp-developer" title="TII Hire C# Developer">C#</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-dot-net-nuke-developer" title="TII Hire DNN Developer">DNN</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-xamarin-developer" title="TII Hire Xamarin Developer">Xamarin</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-php-developer" title="TII Hire PHP Developer">PHP</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-cake-php-developer" title="TII Hire CakePHP Developer">CakePHP</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-laravel-developer" title="TII Hire Laravel Developer">Laravel</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-yii-developer" title="TII Hire YII Developer">YII</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-zend-developer" title="TII Hire Zend Developer">Zend</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-symfony-developer" title="TII Hire Symfony Developer">Symfony</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-ruby-on-rails-developer" title="TII Hire Ruby on Rails Developer">ROR</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-java-developer" title="TII Hire Java Developer">Java</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-angular-js-developer" title="TII Hire Angular JS Developer">Angular JS</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-node-js-developer" title="TII Hire Node JS Developer">Node JS</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-react-native-developer" title="TII Hire React Native Developer">React Native</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-mean-stack-developer" title="TII Hire Mean Stack Developer">MEAN Stack</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-android-developer" title="TII Hire Android Developer">Android</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-ios-developer" title="TII Hire iOS Developer">iOS</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-seo-expert" title="TII Hire SEO Experts">SEO Experts</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-website-designer" title="TII Hire Website Designer Developer">Website Designer</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-database-developer" title="TII Hire Database Developer Analyst">Database Developer</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-umbraco-developer" title="TII Hire Umbraco Developer">Umbraco</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-wordpress-developer" title="TII Hire Wordpress Developer">Wordpress</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-craft-cms-developer" title="TII Hire DNN Developer">Craft</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-magento-developer" title="TII Hire Magento Developer">Magento</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-magento-developer" title="TII Hire Magento 2 Developer">Magento 2</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-unity-3d-developer" title="TII Hire Unity 3D Developer">Unity 3D</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-joomla-developer" title="TII Hire Joomla Developer">Joomla</Link> <span className={styles.cornaer}> | </span>
                <Link href="/drupal-cms-development" title="TII Hire Drupal Developer">Drupal</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-ms-dynamics-crm-developer" title="TII Hire MS Dynamics CRM Developer">MS Dynamics CRM</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-salesforce-developer" title="TII Hire Salesforce Developer">Salesforce</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-sugarcrm-developer" title="TII Hire SugarCRM Developer">SugarCRM</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-codeigniter-developer" title="TII Hire Codeigniter Developer">Codeigniter</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-shopify-developer" title="TII Hire Shopify Developer">Shopify</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-sharepoint-developer" title="TII Hire SharePoint Developer">SharePoint</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-quality-analyst" title="TII Hire Quality Analyst">Quality Analyst</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-mongodb-developer" title="TII Hire MongoDB Developer">MongoDB</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-opencart-developer" title="TII Hire Opencart Developer">Opencart</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-python-developer" title="TII Hire Python Developer">Python</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-woocommerce-developer" title="TII Hire wooCommerce Developer">WooCommerce</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-prestashop-developer" title="TII Hire Prestashop Developer">PrestaShop</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-bigcommerce-developer" title="TII Hire BigCommerce Developer">BigCommerce</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-nopcommerce-developer" title="TII Hire nopCommerce Developer">NopCommerce</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-virtuemart-developer" title="TII Hire VirtueMart Developer">VirtueMart</Link> <span className={styles.cornaer}> | </span>
                <Link href="/hire-zencart-developer" title="TII Hire Zencart Developer">Zencart</Link>

                <div className={styles.ftrhd}>Other Links</div>
                <Link href="about-us" >About Us</Link> <span className={styles.cornaer}> | </span>
                <Link href="#" >Contact Us</Link> <span className={styles.cornaer}> | </span>
                <Link href="/blog" >Blogs </Link> <span className={styles.cornaer}> | </span>
                <Link href="#" >Pricing</Link> <span className={styles.cornaer}>  </span>
                <Link href="#" >Terms of Use</Link> <span className={styles.cornaer}> | </span>
                <Link href="#" >Privacy Policy</Link>
              </div>
            </Col>

            <Col lg={3}>
              <h3 className='font25 font-bold white fontf mb-3 mb-lg-4'>Contact</h3>
              <div className={styles.fill}>
                <div>
                  <BsFillEnvelopeFill size={20} className={styles.email} />
                </div>
                <div>
                  <Link className='font15 font-medium white fontf' href="mailto:info@BitsWits.co"> info@BitsWits.com</Link>
                </div>
              </div>
              <div className={styles.fill}>
                <div>
                  <BsFillTelephoneFill size={25} className={styles.email} />
                </div>
                <div>
                  <Link className='font15 font-medium white fontf' href="tel:+1 312 379 5987">+1 312 379 5987</Link> <br></br>
                  <Link className='font15 font-medium white fontf' href="tel:+18335006007">+1 833 500 6007</Link>
                </div>
              </div>
              <div className={styles.socialicons}>
                <Link href="#"> <FaFacebookF size={20} className={styles.email} /></Link>
                <Link href="#"> <AiOutlineInstagram size={20} className={styles.email} /></Link>
                <Link href="#"> <AiOutlineTwitter size={20} className={styles.email} /></Link>
                <Link href="#"> <AiFillLinkedin size={20} className={styles.email} /></Link>
                <div className={styles.spacing}> </div>
                <Link href="#"> <AiFillBehanceCircle size={20} className={styles.email} /></Link>
                <Link href="#"> <BsPinterest size={20} className={styles.email} /></Link>
                <Link href="#" > <Image alt="BitsWits" src={icon} className={`${styles.email}`} /> </Link>
                <Link href="#"> <FaTelegramPlane size={20} className={styles.email} /></Link>
              </div>

              <div className='mt-5'>
                <Image alt="BitsWits" src={apple} className="img-fluid w-75" />
              </div>
            </Col>
          </Row>

          <Row className={styles.policy}>
            <Col lg={6}>
              <p className='font15 font-medium white fontf'>Copyright © 2024 BitsWits. | Brand Of Bhaoo Incorporation Company</p>
            </Col>
            <Col lg={6}>
              {/* <p className='font15 font-medium white fontf right'> <Link className='white' href="#">Terms of Use</Link>  | <Link className='white' href="#">Privacy Policy</Link></p> */}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Footer