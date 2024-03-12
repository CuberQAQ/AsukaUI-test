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

const App = () => {
  return (
    
)  ;
};

