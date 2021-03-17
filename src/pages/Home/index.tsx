import Header from '../../components/Header'
import Footer from '../../components/Footer'
import icon from '../../assets/iconsAnimated/scrollDown.json'

import Lottie from 'react-lottie'
import { FcCheckmark } from 'react-icons/fc'
import { AiFillLock, AiFillThunderbolt, AiFillSound} from 'react-icons/ai'
import { FaMicrophone } from 'react-icons/fa'
import { RiBattery2ChargeFill } from 'react-icons/ri'
import { IoIosWater } from 'react-icons/io'
import { HiShoppingCart } from 'react-icons/hi'

import { Content, Button, InfoProduct, FeaturesProduct, VideoProduct, Products } from './style'

const Home: React.FC = () => {
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: icon,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <>
      <Header/>
      <Content id="header">
        <div className="wrapper-info">
          <img src="https://sc04.alicdn.com/kf/H7e00c0b1e3b84124846d81aef2f35a88b.jpg" alt=""/>
          <div className="wrapper-info-content">
            <p>A PRÓXIMA GERAÇÃO DE <br/> WIRELESS</p>
            <span>A vida é mais divertida com wireless. <br/>O MELHOR áudio sem fio a partir de $165</span>
            <a href="#produtos">
              <Button>COMPRAR AGORA!</Button>
            </a>
          </div>
        </div>
        
        <div className="wrapper-product">
          <video src="https://cdn.shopify.com/s/files/1/2013/4953/files/IMG_7299_1.mp4?v=1587018434"loop autoPlay muted playsInline/>
          <svg height="0" width="0">
            <defs>
              <clipPath id="svgPath">
                <path fill="#FFFFFF" stroke="#000000" d="M426.077 887.952C340.033 863.079 282.503 753.358 210.694 677.378C137.025 599.431 -3.01422 573.763 0.601868 437.768C4.76959 281.025 205.593 283.578 225.26 129.562C250.269 -66.2917 23.8946 -278.675 111.166 -428.082C189.303 -561.851 323.1 -301.264 426.077 -214.232C477.414 -170.844 509.586 -96.8607 559.301 -49.3358C614.733 3.65302 683.233 11.1946 731.742 77.9653C818.883 197.912 952.489 306.792 947.476 484.973C942.752 652.925 809.676 745.543 710.813 821.953C623.142 889.712 522.757 915.901 426.077 887.952Z"/>
              </clipPath>
            </defs>
          </svg>
        </div>
        
        <div className="wrapper-scroll-down">
          <a href="#info-produto">
            <Lottie 
              options={defaultOptions}
              height={60}
              width={30}
            />
          </a>
        </div>
      </Content>
      <InfoProduct id="info-produto">
        <div className="product-about">
          <div className="card">
            <h1>TWS L21 PRO Wireless Earbuds</h1>
            <p><span>Wireless Charging</span></p>
            <ul>
              <li><FcCheckmark/> Sons wireless de alta desempenho</li>
              <li><FcCheckmark/> Caixa de carregamento sem fio</li>
              <li><FcCheckmark/> Ajuste confortável e seguro</li>
              <li><FcCheckmark/> Controle smart & à prova d'água</li>
            </ul>
          </div>
        </div>
        <div className="product-img">
          <img src="https://sc04.alicdn.com/kf/Hb66c583409074a4b888f4300fa6b15b0M.jpg" alt=""/>
        </div>
      </InfoProduct>
      <FeaturesProduct>
        <div className="card-feature">
          <AiFillSound size={50} color="#DF5E5E" />
          <h4>Som Estéreo</h4>
          <p>Agora é possível emparelhar 2 fones de ouvido sem fio, oferecendo som surround de alta qualidade onde quer que você vá.</p>
        </div>
        <div className="card-feature">
          <AiFillThunderbolt size={50} color="#DF5E5E" />
          <h4>Conexão</h4>
          <p>Com a tecnologia mais recente e rápida dos fones de ouvido CR8-1 Sport Wireless, você pode se conectar facilmente a qualquer dispositivo móvel e experimentar um emparelhamento rápido e conexões estáveis.</p>
        </div>
        <div className="card-feature">
          <FaMicrophone size={50} color="#DF5E5E" />
          <h4>Microfone</h4>
          <p>Microfone HD integrado para uma chamada perfeita também com o microfone integrado, o acesso ao Siri / Google Assistant está a apenas um toque de distância, proporcionando uma experiência estéreo sem fio verdadeiramente viva-voz.</p>
        </div>
        <div className="card-feature">
          <RiBattery2ChargeFill size={50} color="#DF5E5E" />
          <h4>Mais de 24 horas</h4>
          <p>O CR8-1 Sport oferece até 5 horas de audição com uma única carga. Com nosso estojo de carregamento que vem com cada par de fones de ouvido, você receberá cobranças múltiplas. O par agora lhe dará mais de 24 horas de tempo de escuta.</p>
        </div>
        <div className="card-feature">
          <IoIosWater size={50} color="#DF5E5E" />
          <h4>100% IPX7 Impermeável</h4>
          <p>O nano-revestimento resistente à água IPX7 evita com eficiência que a água e o suor penetrem e danifiquem seu componente sensível. Trabalhar adequadamente para exercícios ao sol ou músicas na chuva.</p>
        </div>
        <div className="card-feature">
          <AiFillLock size={50} color="#DF5E5E" />
          <h4>Ajuste universal seguro</h4>
          <p>Devido ao seu formato pequeno e posição intra-auricular segura, os fones de ouvido CR8-1 Sport são perfeitos para correr, praticar esportes, fazer caminhadas, malhar e qualquer outra atividade.</p>
        </div>
      </FeaturesProduct>
      <VideoProduct>
        <a href="#produtos">
          <Button>COMPRAR AGORA!</Button>
        </a>
        <img src="https://cdn.shopify.com/s/files/1/2013/4953/files/20.png?v=1603898953" alt=""/>
        <svg height="0" width="0">
          <defs>
            <clipPath id="svgPathSound">
              <rect x="0" y="0" stroke="#000000" width="108" height="500"/>
              <rect x="121.5" y="25.5" stroke="#000000" width="55" height="455"/>
              <rect x="192.5" y="9.5" stroke="#000000" width="60" height="484"/>
              <rect x="271.5" y="44.5" stroke="#000000" width="63" height="416"/>
              <rect x="349.5" y="25.5" stroke="#000000" width="208" height="447"/>
              <rect x="574.5" y="44.5" stroke="#000000" width="60" height="446"/>
              <rect x="644.5" y="9.5" stroke="#000000" width="68" height="471"/>
              <rect x="736.5" y="18.5" stroke="#000000" width="49" height="462"/>
              <rect x="797.5" y="25.5" stroke="#000000" width="55" height="455"/>
              <rect x="874.5" y="44.5" stroke="#000000" width="60" height="446"/>
              <rect x="949.5" y="25.5" stroke="#000000" width="208" height="447"/>
              <rect x="1175.5" y="9.5" stroke="#000000" width="60" height="484"/>
            </clipPath>
          </defs>
        </svg>
      </VideoProduct>
      <Products id="produtos">
        <div className="card-product">
          <p>R$<span>165</span>,00</p>
          <img src="https://sc04.alicdn.com/kf/H7e00c0b1e3b84124846d81aef2f35a88b.jpg" alt=""/>
          <h4>TWS L21 PRO - Black</h4>
          <a href="https://gear-stores.pay.yampi.com.br/r/EQLX0SJ98Y">
            <button>COMPRAR <HiShoppingCart size={30}/></button>
          </a>
        </div>
        <div className="card-product">
          <p>R$<span>165</span>,00</p>
          <img src="https://sc04.alicdn.com/kf/Hc15f5374dd4f4cc49bf364bc610dd43bB.jpg" alt=""/>
          <h4>TWS L21 PRO - White</h4>
          <a href="https://gear-stores.pay.yampi.com.br/r/K5YBQLJ1T7">
            <button>COMPRAR <HiShoppingCart size={30}/></button>
          </a>
        </div>
      </Products>
      <Footer/>
    </>
  )
}

export default Home;