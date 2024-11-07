import * as hmUI from "@zos/ui";
import {
  AsukaUI,
  Color,
  LayoutManagerFactory,
  NativeBindingsFactory,
  render,
  MainAxisAlignment,
  EdgeInsets,
  Alignment,
} from "@cuberqaq/asuka-solid";
import { px } from "@zos/utils";
import MyButton from "./components/myButton.jsx";
const asuka = new AsukaUI();

Page({
  build() {
    asuka.registerNodeFactory(NativeBindingsFactory);
    asuka.registerNodeFactory(LayoutManagerFactory);
    const mainView = asuka.mountView(hmUI);
    render(() => {
      return (
        <stack ali={Alignment.center}>
          <column mainAxisAlignment={MainAxisAlignment.spaceEvenly} c>
            <text text="hello world" text_size={20} />
            <text text="hello world1" text_size={80} />
            <text text="hello world2" />
            <text text="hello world3" />
            <MyButton />
            <spacer h={px(20)} />
            <MyButton />
          </column>
        </stack>
      );
    }, mainView);
    asuka.refreshSync();
  },
});

const App = () => {
  return (
    <stack ali={Alignment.center}>
      <fillrect color={Color.random()} />
      <column maa={MainAxisAlignment.spaceAround}>
        <spacer />
        <sizedbox h={50} child={<MyRow maa={MainAxisAlignment.start} />} />
        <sizedbox h={50} child={<MyRow maa={MainAxisAlignment.center} />} />
        <sizedbox h={50} child={<MyRow maa={MainAxisAlignment.end} />} />
        <sizedbox
          h={50}
          child={<MyRow maa={MainAxisAlignment.spaceAround} />}
        />
        <sizedbox
          h={50}
          child={<MyRow maa={MainAxisAlignment.spaceBetween} />}
        />
        <sizedbox
          h={50}
          child={<MyRow maa={MainAxisAlignment.spaceEvenly} />}
        />
        <expanded
          flex={2}
          child={
            <padding
              p={EdgeInsets.all(20)}
              child={<fillrect color={Color.random()} />}
            />
          }
        />
      </column>
      <positioned
        top={px(40)}
        left={px(40)}
        w={px(200)}
        h={px(200)}
        child={<fillrect color={Color.random()} alpha={128} />}
      />
      <positioned
        w={px(200)}
        h={px(200)}
        child={<fillrect color={Color.random()} alpha={128} />}
      />
      <positioned
        bottom={px(40)}
        right={px(40)}
        w={px(200)}
        h={px(200)}
        child={<fillrect color={Color.random()} alpha={128} />}
      />
    </stack>
  );
};

const MyRow = (props) => {
  return (
    <row maa={props.mainAxisAlignment ?? props.maa}>
      <sizedbox w={120} child={<fillrect color={Color.random()} />} />
      <sizedbox w={120} child={<fillrect color={Color.random()} />} />
      <sizedbox w={120} child={<fillrect color={Color.random()} />} />
    </row>
  );
};
