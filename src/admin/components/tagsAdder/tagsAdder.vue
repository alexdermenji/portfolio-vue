<template>
  <div class="tags-adder-component">
    <app-input
      title="Add tag"
      v-model="currentTags"
      @input="$emit('change', currentTags)"
    >
    </app-input>
    <ul class="tags">
      <li
        class="tag"
        v-for="(tag, index) in tagsArray"
        :key="`${tag}${index}`"
        v-if="tag.trim()"
      >
        <tag interactive :title="tag" @click="removeTag(tag)"></tag>
      </li>
    </ul>
  </div>
</template>
<script>
import appInput from "../input";
import tag from "../tag";

export default {
  data() {
    return {
      currentTags: this.tags,
    };
  },
  computed: {
    tagsArray() {
      return this.currentTags.trim().split(",");
    },
  },
  props: {
    tags: {
      type: String,
      default: "",
    },
  },
  model: {
    prop: "tags",
    event: "change",
  },
  methods: {
    removeTag(tag) {
      const tags = [...this.tagsArray];
      const tagNdx = tags.indexOf(tag);
      if (tagNdx < 0) {
        return;
      }
      tags.splice(tagNdx, 1);
      this.currentTags = tags.join(", ");
      thos.$emit("change", currentTags);
    },
  },
  components: {
    appInput,
    tag,
  },
};
</script>

<style lans="postcss">
.tags {
  display: flex;
  margin-top: 20px;
}

.tag {
  margin-right: 10px;
}
</style>
