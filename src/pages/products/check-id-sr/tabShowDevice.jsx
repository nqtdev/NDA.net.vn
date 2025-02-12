import {ConfigProvider, Tabs} from 'antd'
import SlideShowSwiper from 'components/SlideShowSwiper'
import {SlideProductCam, SlideProductNoCam} from './data/SlideProduct'

const onChange = key => {
  console.log(key)
}

const TabShowDevice = () => {
  const items = [
    {
      key: '1',
      label: 'Thiết bị đầu đọc thẻ có Camera',
      children: <SlideShowSwiper slidesShow={SlideProductCam} />,
    },
    {
      key: '2',
      label: 'Thiết bị đầu đọc thẻ không Camera',
      children: <SlideShowSwiper slidesShow={SlideProductNoCam} />,
    },
    // {
    //   key: '3',
    //   label: 'So sánh',
    //   children: <SlideShowSwiper slidesShow={SlideProduct} />,
    // },
  ]

  return (
    <ConfigProvider
      theme={{
        components: {
          Tabs: {titleFontSize: 14},
        },
      }}
    >
      <Tabs defaultActiveKey='1' items={items} onChange={onChange} />
    </ConfigProvider>
  )
}

export default TabShowDevice
