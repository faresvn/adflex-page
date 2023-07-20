import { DialogOverlay } from '@reach/dialog'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'
import MotionDialogContent from '../MotionDialogContent'
import PlusIcon from '../icons/PlusIcon'
import PrimaryBtn from '../PrimaryBtn'
import UpRightArrow from '../icons/UpRightArrow'
import CloseDialogIcon from '../icons/CloseDialogIcon'
import Link from 'next/link'

function CPASolution() {
  const [showDialog, setShowDialog] = useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <div data-aos="fade-up" data-aos-duration="700" className="">
      <div
        style={{
          backgroundImage: 'url(/images/solution-bg1.png)',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%',
        }}
        onClick={open}
        className="cursor-pointer max-w-[488px] px-4 py-4 md:py-6 md:px-8"
      >
        <div className="flex items-center justify-between">
          <img src="/images/cpa-icon.png" alt="cpa" className="w-11" />
          <PlusIcon />
        </div>
        <p className="mt-2 text-2xl">Giải pháp CPA</p>
        <p className="mt-2 text-justify">
          Nền tảng Affiliate Marketing CPA – Cost-per-action hàng đầu Châu Á phục vụ nhu cầu quảng
          cáo chuyển đổi mở rộng cho khách hàng tại Việt Nam và quốc tế.
        </p>
      </div>
      <AnimatePresence>
        {showDialog && (
          <DialogOverlay onDismiss={close} className="z-50 flex items-center justify-center">
            <MotionDialogContent
              aria-label="Popup"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="z-50 max-w-[343px] !w-max !p-0 md:max-w-[684px] !bg-transparent"
            >
              <motion.div
                className="flex flex-col px-4 py-4 md:px-10 md:py-8 backdrop-blur-md"
                initial={{ y: +30 }}
                animate={{ y: 0 }}
                style={{
                  backgroundImage: 'url(/images/cpa-popup-bg.png)',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '100% 100%',
                }}
              >
                <div className="flex items-start">
                  <div className="">
                    <img src="/images/cpa-icon.png" alt="cpa" className="w-11" />
                    <p className="text-[32px] font-medium mt-4">Giải pháp CPA</p>
                    <p className="mt-4">
                      Với Strong knowhow về affiliate marketing (10+ năm kinh nghiệm) cùng nền tảng
                      Data driven, AdFlex có thể đáp ứng KPI lớn (high volume traffic) và được
                      AppsFlyer xếp hạng top 6 trên toàn Đông Nam Á về chất lượng CPA.
                    </p>
                    <Link href="/cpa">
                      <a>
                        <PrimaryBtn className="mt-8 md:mt-24">
                          <div className="flex items-center gap-2">
                            <p className="text-white">Tìm hiểu thêm </p>
                            <UpRightArrow />
                          </div>
                        </PrimaryBtn>
                      </a>
                    </Link>
                  </div>
                  <div onClick={close} className="w-10 cursor-pointer">
                    <CloseDialogIcon />
                  </div>
                </div>
              </motion.div>
            </MotionDialogContent>
          </DialogOverlay>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CPASolution
