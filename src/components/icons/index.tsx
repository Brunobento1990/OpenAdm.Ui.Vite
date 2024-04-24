import { Icon as Iconify } from "@iconify/react";

interface propsIcon {
  icon?: string;
  onClck?: () => void;
  heigth?: string
}

export function Icon(props: propsIcon) {
  if (!props.icon)
    return (
      <div style={{ width: "15px", backgroundColor: "transparent" }}></div>
    );

  return (
    <Iconify
      icon={props.icon}
      onClick={props.onClck}
      style={{ backgroundColor: "transparent", height: props.heigth ?? '25px' }}
    />
  );
}
