const MORPH = "MORPH";
const VISIBLE = "VISIBLE"

export function MorphShape(shape){
  return {type: Morph, shape}
}

export function ChangeVisible(visible){
  return {type: VISIBLE, visible}
}
