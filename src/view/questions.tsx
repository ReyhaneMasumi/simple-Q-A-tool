import Button from '../components/button';
import Card from '../components/card';

function Questions() {
  return (
    <Card
      imgURL="./assets/images/q-profile-img.svg"
      title="مشکل در Auth در React"
      date="2022-10-23T18:25"
      comments={20}
    >
      <div className="flex-col-start gap-4 w-full px-6 py-3">
        <div className="self-start black-14">
          سلام من میخوام یه authentication ساده تو react بسازم اما این error رو
          بهم میده. نمیدونم مشکل از کجاست. عکس خروجی console رو هم گذاشتم که
          ببینید دقیقا چه مشکلی وجود داره
        </div>
        <Button
          className="self-end"
          variant="secondary"
          onClick={() => {
            window.location.assign('/details');
          }}
        >
          مشاهده جزئیات
        </Button>
      </div>
    </Card>
  );
}

export default Questions;
