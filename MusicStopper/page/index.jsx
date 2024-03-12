import * as hmUI from "@zos/ui";
import { LocalStorage } from '@zos/storage'
import {
  AsukaUI,
  Color,
  LayoutManagerFactory,
  NativeBindingsFactory,
  render,
  MainAxisAlignment,
  EdgeInsets,
  Solid,
  Alignment,
} from "@cuberqaq/asuka-solid";
import { px } from "@zos/utils";
const asuka = new AsukaUI();
Page({
  build() {
    asuka.registerNodeFactory(NativeBindingsFactory);
    asuka.registerNodeFactory(LayoutManagerFactory);
    const mainView = asuka.mountView(hmUI);
    render(() => <App />, mainView);
    asuka.refreshSync();
  },
});
const localStorage = new LocalStorage()
const App = () => {
  let [enable, setEnable] = Solid.createSignal(localStorage.getItem('cuber_musicstopper_enable', false))
  return (
    <padding p={EdgeInsets.all(px(60))}>
      <column>
        <text text={enable}/>
      </column>
    </padding>
  );
};
