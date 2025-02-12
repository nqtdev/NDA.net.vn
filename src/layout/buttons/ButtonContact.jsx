const ButtonContact = () => {
  return (
    <>
      <u className='text-xl font-semibold text-main-colors'>Giá Bán:</u>
      <button
        onClick={() => window.open('tel:0901899555', '_self')}
        className='mt-5 ml-4 rounded bg-red-500 px-8 py-2 text-xl font-bold text-white hover:bg-red-700'
      >
        Liên Hệ
      </button>
    </>
  )
}

export default ButtonContact
