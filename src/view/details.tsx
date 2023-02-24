import Button from '../components/button';
import Card from '../components/card';
import Textarea from '../components/textarea';

import { ReactComponent as CommentIcon } from '../assets/images/Comment.svg';
import { ReactComponent as HappyIcon } from '../assets/images/Happy.svg';
import { ReactComponent as SadIcon } from '../assets/images/Sad.svg';

function Details() {
  return (
    <div className="flex-col-start gap-6">
      <Card
        imgURL="./assets/images/q-profile-img.svg"
        title="مشکل در Auth در React"
        date="2022-10-23T18:25"
        customElement={
          <div className="flex-between-center gap-2">
            <CommentIcon />
            <span className="grey-12">
              {new Intl.NumberFormat('fa-IR').format(20)}
            </span>
          </div>
        }
      >
        <div className="flex-col-start gap-4 w-full px-6 py-3">
          <div className="self-start black-14">
            سلام من میخوام یه authentication ساده تو react بسازم اما این error
            رو بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم
            که ببینید دقیقا چه مشکلی وجود داره
          </div>
        </div>
      </Card>
      <div className="title">پاسخ‌ها</div>
      <Card
        imgURL="./assets/images/q-profile-img.svg"
        title="علی کیا"
        date="2022-10-23T18:25"
        customElement={
          <div className="flex-between-center gap-3.5">
            <div className="flex-between-center gap-2">
              <HappyIcon />
              <span className="grey-12">
                {new Intl.NumberFormat('fa-IR').format(20)}
              </span>
            </div>
            <div className="flex-between-center gap-2">
              <SadIcon />
              <span className="grey-12">
                {new Intl.NumberFormat('fa-IR').format(20)}
              </span>
            </div>
          </div>
        }
      >
        <div className="flex-col-start gap-4 w-full px-6 py-3">
          <div className="self-start black-14">
            متغیر ENV رو توی فایلت تغییر بده درست میشه
          </div>
          <div className="flex-end-center gap-5">
            <Button variant="success">
              <div className="flex-between-center gap-3.5">
                <HappyIcon />
                <span>پاسخ خوب بود</span>
              </div>
            </Button>
            <Button variant="error">
              <div className="flex-between-center gap-3.5">
                <SadIcon />
                <span>پاسخ خوب نبود</span>
              </div>
            </Button>
          </div>
        </div>
      </Card>
      <div className="title">پاسخ خود را ثبت کنید</div>
      <div className="grey-dark-12">پاسخ خود را بنویسید</div>
      <Textarea className="w-full" placeholder="متن پاسخ..." />
      <Button variant="primary" className="">
        ارسال پاسخ
      </Button>
    </div>
  );
}

export default Details;
