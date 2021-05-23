/*
 * 数组中是否包含值
 */
function isInclude(t, path, array) {
  let result = null;
  array &&
    array.every((item) => {
      if (t.isIdentifier(path.node.property, { name: item })) {
        result = true;
        return false;
      }
      return true;
    });
  return result;
}

module.exports = function ({ types: t }) {
  return {
    visitor: {
      MemberExpression(path, state) {
        if (
          t.isIdentifier(path.node.object, { name: "console" }) &&
          isInclude(t, path, state.opts.include)
        ) {
          path.parentPath.remove();
        }
      },
    },
  };
};
