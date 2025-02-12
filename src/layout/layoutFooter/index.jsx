import imgBcta from 'assets/logo/bct_notion.webp'
import imgBctb from 'assets/logo/bct_sub.webp'
const LayoutFooter = () => {
  return (
    <footer className='mt-16 flex justify-center bg-main-bgcolors'>
      <div className='m-4 mt-16 xl:w-10/12'>
        <div className='grid gap-2 md:grid-cols-3'>
          <section className=''>
            {/* <p className='text-sm text-[#a1a5ba]'>Sản phẩm thuộc hệ sinh thái</p> */}
            {/* <img className='w-44' src={LogoHtcSw} alt='logo_htcgroup' /> */}
            <div className='xl:mb-3'>
              <div className='mt-2 flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z'
                  />
                </svg>
                <a className='ml-3 text-white' href='tel:0901899555'>
                  090.189.9555
                </a>
              </div>
              <div className='mt-2 flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75'
                  />
                </svg>
                <a className='ml-3 text-white' href='mailto:nda.ldt@gmail.com'>
                  nda.ldt@gmail.com
                </a>
              </div>
              <div className='mt-2 flex'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='currentColor'
                  className='size-6 text-white'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
                  />
                </svg>
                <p className='ml-3 text-white'>Mã Số Doanh Nghiệp: 0110923674</p>
              </div>
              <div className='flex mt-2 w-3/4 items-center'>
                <div className='w-full'>
                  <img className='w-4/5' src={imgBcta} alt='' />
                </div>
                <div className='w-full'>
                  <img className='w-4/5' src={imgBctb} alt='' />
                </div>
              </div>
            </div>
          </section>
          <section className='col-span-2'>
            <div className='mb-10 text-center'>
              <span className='style-address text-2xl uppercase'>
                công ty tnhh giải pháp và ứng dụng dữ liệu quốc gia nda{' '}
              </span>
            </div>
            <div className='mb-4'>
              <h4 className='style-address'>Địa chỉ trụ sở chính</h4>
              <div className='flex'>
                <div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth='1.5'
                    stroke='currentColor'
                    className='size-6 text-white'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z'
                    />
                  </svg>
                </div>
                <span className='text-white'>
                  Số 136 Nguyễn Khánh Toàn, Phường Quan Hoa, Quận Cầu Giấy, Thành phố Hà Nội, Việt
                  Nam
                </span>
              </div>
            </div>
          </section>
        </div>
        <div className='pt-2'>
          <h2 className='text-center font-mulish text-[.8rem] text-[#a1a5ba]'>
            Copyright © 2024 NDA
          </h2>
        </div>
      </div>
    </footer>
  )
}

export default LayoutFooter
