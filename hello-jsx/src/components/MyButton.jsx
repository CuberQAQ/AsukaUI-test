import { px } from "@zos/utils";
import { createSignal } from '@cuberqaq/asuka-ui/solid'

export default MyButton = () => {
  let [changed, setChanged] = createSignal(false);
  return (
    <spacer h={px(80)}>
      <button
        text={changed() ? "changed" : "pressme"}
        text_size={px(36)}
        nc={0x0000ff}
        pc={0x00ff00}
        onClick={() => setChanged(x => !x)}
      >
        MyButton
      </button>
    </spacer>
  );
};
