type MenuItem = {
  name: string;
  active: boolean;
};
const getActiveAndInactive = (
  arr: MenuItem[],
  name: string,
): { active: MenuItem; inactive: MenuItem[] } => {
  const local = Array.from(arr);
  const activeIdx = local.findIndex((i) => i.name === name);
  local[activeIdx].active = true;
  const active = local.splice(activeIdx, 1);
  return { active: active[0], inactive: local };
};

export default getActiveAndInactive;
