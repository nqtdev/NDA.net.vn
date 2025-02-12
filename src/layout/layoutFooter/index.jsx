// import LogoHtcSw from 'assets/logo/logo_sw.webp'
// import imgBcta from 'assets/logo/bct_notion.webp'
// import imgBctb from 'assets/logo/bct_sub.webp'
const LayoutFooter = () => {
  return (
    <footer className='mt-16 flex justify-center bg-main-bgcolors '>
      <div className='m-4 mt-16 xl:w-10/12'>
        <div className='grid gap-2'>
          <section className='col-span-2'>
            <div className='mb-10 text-center'>
              <span className='style-address text-2xl'>
                CÔNG TY TNHH GIẢI PHÁP VÀ ỨNG DỤNG DỮ LIỆU QUỐC GIA NDA{' '}
              </span>
            </div>
            <div className='mb-4 '>
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
            <div>
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
