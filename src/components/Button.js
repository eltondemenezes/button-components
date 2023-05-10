import "./Button.css";

export default function Button(props) {
  const size =
    (props.size === "sm" && "small") ||
    (props.size === "md" && "") ||
    (props.size === "lg" && "large") ||
    "";

  const color =
    (props.color === "primary" && size + " primary") ||
    (props.color === "secondary" && size + " secondary") ||
    (props.color === "danger" && size + " danger") ||
    "";

  const classes = props.disableShadow
    ? `${props.variant} disableShadow ${size} ${color}`
    : `${props.variant} ${size} ${color}`;

  const text =
    (props.color === "primary" && "Primary") ||
    (props.color === "secondary" && "Secondary") ||
    (props.color === "danger" && "Danger") ||
    "Default";

  return (
    <button className={classes} disabled={props.disabled}>
      {props.iconPos === "before" && (
        <span class="material-symbols-outlined">add_shopping_cart</span>
      )}
      {text}
      {props.iconPos === "after" && (
        <span class="material-symbols-outlined">add_shopping_cart</span>
      )}
    </button>
  );
}
