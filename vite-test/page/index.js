import { createSignal, createElement, insertNode, createTextNode, setProp, effect, AsukaUI, NativeBindingsFactory, LayoutManagerFactory, render, insert, createComponent, Alignment, MainAxisAlignment } from '@cuberqaq/asuka-solid';
import * as hmUI from '@zos/ui';
import { px } from '@zos/utils';

var MyButton$1 = MyButton = () => {
  let [changed, setChanged] = createSignal(false);
  return (() => {
    var _el$ = createElement("spacer"),
      _el$2 = createElement("button");
    insertNode(_el$, _el$2);
    insertNode(_el$2, createTextNode(`MyButton`));
    setProp(_el$2, "nc", 0x0000ff);
    setProp(_el$2, "pc", 0x00ff00);
    setProp(_el$2, "onClick", () => setChanged(x => !x));
    effect(_p$ => {
      var _v$ = px(80),
        _v$2 = changed() ? "changed" : "pressme",
        _v$3 = px(36);
      _v$ !== _p$.e && (_p$.e = setProp(_el$, "h", _v$, _p$.e));
      _v$2 !== _p$.t && (_p$.t = setProp(_el$2, "text", _v$2, _p$.t));
      _v$3 !== _p$.a && (_p$.a = setProp(_el$2, "text_size", _v$3, _p$.a));
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined
    });
    return _el$;
  })();
};

const asuka = new AsukaUI();
Page({
  build() {
    asuka.registerNodeFactory(NativeBindingsFactory);
    asuka.registerNodeFactory(LayoutManagerFactory);
    const mainView = asuka.mountView(hmUI);
    render(() => {
      return (() => {
        var _el$ = createElement("stack"),
          _el$2 = createElement("column"),
          _el$3 = createElement("text"),
          _el$4 = createElement("text"),
          _el$5 = createElement("text"),
          _el$6 = createElement("text"),
          _el$7 = createElement("spacer");
        insertNode(_el$, _el$2);
        insertNode(_el$2, _el$3);
        insertNode(_el$2, _el$4);
        insertNode(_el$2, _el$5);
        insertNode(_el$2, _el$6);
        insertNode(_el$2, _el$7);
        setProp(_el$2, "c", true);
        setProp(_el$3, "text", "hello world");
        setProp(_el$3, "text_size", 20);
        setProp(_el$4, "text", "hello world1");
        setProp(_el$4, "text_size", 80);
        setProp(_el$5, "text", "hello world2");
        setProp(_el$6, "text", "hello world3");
        insert(_el$2, createComponent(MyButton$1, {}), _el$7);
        insert(_el$2, createComponent(MyButton$1, {}), null);
        effect(_p$ => {
          var _v$ = Alignment.center,
            _v$2 = MainAxisAlignment.spaceEvenly,
            _v$3 = px(20);
          _v$ !== _p$.e && (_p$.e = setProp(_el$, "ali", _v$, _p$.e));
          _v$2 !== _p$.t && (_p$.t = setProp(_el$2, "mainAxisAlignment", _v$2, _p$.t));
          _v$3 !== _p$.a && (_p$.a = setProp(_el$7, "h", _v$3, _p$.a));
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$;
      })();
    }, mainView);
    asuka.refreshSync();
  }
});
