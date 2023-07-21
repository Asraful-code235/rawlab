import { defineField, defineType } from "sanity";

export default defineType({
  name: "sortedWork",
  title: "Sorted Work",
  type: "document",
  fields: [
    defineField({
      name: "sorted",
      title: "Sorted Work Tab ",
      type: "array",
      of: [{ type: "reference", to: { type: "post" } }],
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Sorted Item",
      };
    },
  },
});
