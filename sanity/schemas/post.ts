import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: " Posts",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
      ],
    }),

    defineField({
      name: "about",
      title: "About the project Header",
      type: "string",
    }),
    defineField({
      name: "aboutDesc",
      title: "About Description",
      type: "string",
    }),
    defineField({
      name: "aboutPhotos",
      title: "About Photos",
      type: "array", // Use array type for multiple images
      of: [{ type: "image", options: { hotspot: true } }], // Allow multiple images
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "theChallenge",
      title: "The Challenge Header",
      type: "string",
    }),
    defineField({
      name: "thechallengeDesc",
      title: "The Challenge Description",
      type: "string",
    }),
    defineField({
      name: "theChallengeImages",
      title: "The Challenge Images",
      type: "array", // Use array type for multiple images
      of: [{ type: "image", options: { hotspot: true } }], // Allow multiple images
      options: {
        layout: "grid",
      },
    }),

    defineField({
      name: "TheSolution",
      title: "The solution Header",
      type: "string",
    }),
    defineField({
      name: "TheSolutionDesc",
      title: "The solution Description",
      type: "string",
    }),
    defineField({
      name: "theSolutionImages",
      title: "The Solution Images",
      type: "array", // Use array type for multiple images
      of: [{ type: "image", options: { hotspot: true } }], // Allow multiple images
      options: {
        layout: "grid",
      },
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    }),

    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),

    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
