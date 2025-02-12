// import Field from './field'
import PosterPage from './Poster'
import Procedure from './procedure'
// import Certificate from './Certificate'
import Feature from './Feature'
import ButtonContact from 'layout/buttons/ButtonContact'
import SlideShowSwiper from 'components/SlideShowSwiper'
// checkID-ET100
import SlideProduct from '../products/check-id-et/data/SlideProduct'
import DeviceParameters from '../products/check-id-et/data/DeviceParameters'
// checkID-HN202
import SlideProductHN202 from '../products/check-id-hn202/data/SlideProduct'
import {
  DeviceParametersHN202,
  DeviceParametersCameraHN202,
} from '../products/check-id-hn202/data/DeviceParameters'
// checkID-R301
import SlideProductR301 from '../products/check-id-r301/data/SlideProduct'
import DeviceParametersR301 from '../products/check-id-r301/data/DeviceParameters'
//checkID-SR
import TabShowDevice from 'pages/products/check-id-sr/tabShowDevice'
import DeviceParametersSR from 'pages/products/check-id-sr/data/DeviceParameters'
// Tính năng
import RickPorts from 'assets/image_products/icon_function/RichPort.png'
import SmartCard from 'assets/image_products/icon_function/smartCard.png'
import RichPort from 'assets/image_products/icon_function/RichPort.png'
import NFC from 'assets/image_products/icon_function/NFC.png'
import Camera from 'assets/image_products/icon_function/Camera.png'
import Fingerprint from 'assets/image_products/icon_function/Fingerprint.png'
import MRZ from 'assets/image_products/icon_function/MRZ.png'
import TableSpecification from 'components/TableSpecification'
import Field from './field'

const IdPassPage = () => {
  return (
    <div className='container m-auto'>
      <section>
        <PosterPage />
      </section>
      <section>
        <Feature />
      </section>
      <section className='h-[38rem]'>
        <div className='m-10'>
          <h2 className='base_title '>Giải pháp tự động hoá thủ tục kiểm tra thông tin</h2>
        </div>
        <Procedure />
      </section>
      <section>
        <div className='m-10'>
          <h2 className='base_title '>Thiết bị của chúng tôi</h2>
        </div>
        <div>
          {/* CheckID-ET100 */}
          <div>
            <section>
              <div>
                <h2 className='base_title'>Hình ảnh thiết bị CheckID-ET100</h2>
              </div>
              <div className='m-auto w-3/4'>
                <SlideShowSwiper slidesShow={SlideProduct} />
              </div>
            </section>
            {/* Chi tiết sản phẩm  */}
            <section>
              <div className='m-auto grid gap-3 p-5 lg:w-2/3 lg:grid-cols-2'>
                <div>
                  <div className='mb-3 ml-2'>
                    <i className='text-center text-3xl font-bold text-main-colors'>CheckID-ET100</i>
                  </div>

                  <p className='font-roboto text-main-colors'>
                    CheckID-ET100 được thiết kế để đáp ứng nhu cầu bảo mật cao mà không làm giảm sự
                    tiện lợi. Thiết bị này có cổng USB loại A female, cho phép kết nối với máy tính.
                    Nó hỗ trợ nhiều loại cảm biến sinh trắc học như SecuGen, SupreMa, ZKTeco và
                    Morpho. Việc chọn cảm biến sinh trắc học nên dựa trên yêu cầu của khách hàng.
                  </p>
                </div>
                <div className='mt-3'>
                  <div className='mb-2'>
                    <u className='text-xl font-semibold text-main-colors'>Chức năng:</u>
                  </div>
                  <ul className='grid grid-cols-3 gap-2 md:grid-cols-6'>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={SmartCard}
                        alt='SmartCard'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>SmartCard</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={RichPort}
                        alt='RichPort'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>RichPorts</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={NFC}
                        alt='NFC'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>NFC</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={Camera}
                        alt='Camera'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>Camera</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={Fingerprint}
                        alt='Fingerprint'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>
                        Fingerprint
                      </p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={MRZ}
                        alt='MRZ'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>MRZ</p>
                    </li>
                  </ul>
                  <ButtonContact />
                </div>
              </div>
            </section>
            <section>
              <div>
                <h2 className='base_title'>Thông số kỹ thuật thiết bị</h2>
              </div>
              <TableSpecification data={DeviceParameters} />
            </section>
          </div>
          {/* HN-202  */}
          <div>
            <section>
              <div>
                <h2 className='base_title'>Hình ảnh thiết bị CheckID-HN202</h2>
              </div>
              <div className='m-auto w-3/4'>
                <SlideShowSwiper slidesShow={SlideProductHN202} />
              </div>
            </section>
            {/* Chi tiết sản phẩm  */}
            <section>
              <div className='m-auto grid gap-3 p-3 lg:w-2/3 lg:grid-cols-2'>
                <div>
                  <div className='mb-3 ml-2'>
                    <i className='text-center text-3xl font-bold text-main-colors'>
                      CCID Smartcard Reader
                    </i>
                  </div>

                  <p className='text-left font-roboto text-main-colors'>
                    - CheckID-HN212 đã đạt kết quả thử nghiệm QCVN 55:2023/BTTT; QCVN 96:2025/BTTT.{' '}
                    <br /> - Đạt khả năng chịu nhiệt theo TCVN 7699-2-2:2021; TCVN 4255:2008; <br />{' '}
                    - Đạt khả năng chống chạm vào bộ phận mang điện IEC 60529:2001; khả năng chống
                    xâm nhập của nước ip41. <br /> - Đạt được yêu cầu kỹ thuật và các tiêu chuẩn,
                    quy chuẩn Việt Nam theo quyết định số 1091/QD-BTTT ký ngày 01.07.2024. <br /> -
                    Đạt được yêu cầu dán tem của Trung tâm RAR-C06-BCA
                  </p>
                </div>
                <div className='mt-3'>
                  <div className='mb-2'>
                    <u className='text-xl font-semibold text-main-colors'>Chức năng:</u>
                  </div>
                  <ul className='grid grid-cols-3 gap-2 md:grid-cols-6'>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={SmartCard}
                        alt='SmartCard'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>SmartCard</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={NFC}
                        alt='NFC'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>NFC</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={Camera}
                        alt='Camera'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>Camera</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={RickPorts}
                        alt='RickPorts'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>RickPorts</p>
                    </li>
                  </ul>
                  <ButtonContact />
                </div>
              </div>
            </section>
            <section>
              <div>
                <h2 className='base_title'>Thông số kỹ thuật thiết bị</h2>
              </div>
              <TableSpecification data={DeviceParametersHN202} />
              <div>
                <h2 className='base_title'>Thông số kỹ thuật thiết bị Camera</h2>
              </div>
              <TableSpecification data={DeviceParametersCameraHN202} />
            </section>
          </div>
          {/* CheckID-SR  */}
          <div>
            <section className='lg:h-[41rem]'>
              <div>
                <h2 className='base_title'>Hình ảnh thiết bị CheckID-SR</h2>
              </div>
              <div className='m-auto w-3/4'>
                <TabShowDevice />
              </div>
            </section>
            {/* Chi tiết sản phẩm  */}
            <section>
              <div className='m-auto grid gap-3 p-3 lg:w-2/3 lg:grid-cols-2'>
                <div>
                  <div className='mb-3 ml-2'>
                    <i className='text-center text-3xl font-bold text-main-colors'>
                      ID Card Reader/Scanner
                    </i>
                  </div>
                  <p className='text-left font-roboto text-main-colors'>
                    Hưởng lợi từ việc nhập dữ liệu và xác minh chính xác <br />
                    Thiết kế OEM cho cổng ABC và các Kiosk tự phục vụ <br />
                    Thiết kế trực quan dễ sử dụng <br /> Kiểm tra tự động hành khách, vận hành 24/7{' '}
                    <br /> Đọc và xác minh mọi loại thẻ bao gồm cả tài liệu điện tử du lịch
                  </p>
                </div>
                <div className='mt-3'>
                  <div className='mb-2'>
                    <u className='text-xl font-semibold text-main-colors'>Chức năng:</u>
                  </div>
                  <ul className='grid grid-cols-3 gap-2 md:grid-cols-6'>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={SmartCard}
                        alt='SmartCard'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>SmartCard</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={NFC}
                        alt='NFC'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>NFC</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={Camera}
                        alt='Camera'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>Camera</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={MRZ}
                        alt='MRZ'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>MRZ</p>
                    </li>
                  </ul>
                  <ButtonContact />
                </div>
              </div>
            </section>
            <section>
              <div>
                <h2 className='base_title'>Thông số kỹ thuật thiết bị</h2>
              </div>
              <TableSpecification data={DeviceParametersSR} />
            </section>
          </div>
          {/* CheckID-R301  */}
          <div>
            <section>
              <div>
                <h2 className='base_title'>Hình ảnh thiết bị CheckID-R301</h2>
              </div>
              <div className='m-auto w-3/4'>
                <SlideShowSwiper slidesShow={SlideProductR301} />
              </div>
            </section>
            {/* Chi tiết sản phẩm  */}
            <section>
              <div className='m-auto grid gap-3 p-3 lg:w-2/3 lg:grid-cols-2'>
                <div>
                  <div className='mb-3 ml-2'>
                    <i className='text-center text-3xl font-bold text-main-colors'>
                      CCID Smartcard Reader
                    </i>
                  </div>

                  <p className='text-left font-roboto text-main-colors'>
                    R301-C11 phù hợp với khách hàng có quan tâm chủ yếu đến vấn đề an ninh và đáp
                    ứng nhu cầu về một giải pháp linh hoạt cho xác thực ID, thương mại điện tử,
                    thanh toán điện tử, bảo mật thông tin và kiểm soát truy cập. <br />
                    R301-C11 và dòng đầu đọc thẻ thông minh còn lại cung cấp cho mỗi khách hàng một
                    giải pháp hoàn chỉnh cho mọi cách sử dụng.
                  </p>
                </div>
                <div className='mt-3'>
                  <div className='mb-2'>
                    <u className='text-xl font-semibold text-main-colors'>Chức năng:</u>
                  </div>
                  <ul className='grid grid-cols-3 gap-2 md:grid-cols-6'>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={SmartCard}
                        alt='SmartCard'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>SmartCard</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={NFC}
                        alt='NFC'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>NFC</p>
                    </li>
                    <li className='m-auto cursor-pointer'>
                      <img
                        className='mb-1 cursor-pointer rounded-md border p-1'
                        src={RickPorts}
                        alt='RickPorts'
                      />
                      <p className='text-center font-roboto text-sm text-main-colors'>RickPorts</p>
                    </li>
                  </ul>
                  <ButtonContact />
                </div>
              </div>
            </section>
            <section>
              <div>
                <h2 className='base_title'>Thông số kỹ thuật thiết bị</h2>
              </div>
              <TableSpecification data={DeviceParametersR301} />
            </section>
          </div>
        </div>
      </section>
      <section>
        <div className='m-10'>
          <h2 className='base_title'>Ứng dụng giải pháp trong các lĩnh vực</h2>
        </div>
        <Field />
      </section>
    </div>
  )
}

export default IdPassPage
