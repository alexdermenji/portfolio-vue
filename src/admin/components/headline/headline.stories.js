import headline from "./headline";

export default {
  title: "headline",
  components: { headline },
};

export const defaultView = () => ({
  components: {
    headline,
  },
  template: `<headline title="Admin panel"><h4>Content</h4></headline>`,
});
