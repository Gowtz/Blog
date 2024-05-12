<script lang="ts">
  let title:string
  let content:string
    const handleSubmit = async (event:Event) => {
      const form =  event.target as HTMLFormElement
      const data = new FormData(form)

      await fetch('/api/blogs',{
        method:'POST',
        body:data
      })
      title=""
      content=""

      
    };
  </script>


  
  <main>
  <form on:submit={handleSubmit}>
  <input type="text" name="title" bind:value={title}/>
  <textarea name="content" bind:value={content} />
  <button type="submit">Submit</button>
  </form>
  </main>
  
  <style>

    textarea{
      height: 400px;
    }
  </style> 