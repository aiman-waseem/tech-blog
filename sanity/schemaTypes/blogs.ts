export default {
    name: 'blogs',
    title: 'Blogs',
    type: 'document',
    fields: [
      {
        name: 'blogTitle',
        title: 'Blog Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'slug of Blog Article',
        type: 'slug',
        options:{
            source:'blogTitle'
        }
      },
      {
        name: 'portrait',
        title: 'Portrait',
        type: 'image',
        options: {
          hotspot: true,
        },
       
      },
      {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}]
      }
    ]
  }