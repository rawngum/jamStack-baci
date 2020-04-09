const listRepo = async username =>{
   const repo = await fetch(
       `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
   )
       .then(res => res.json())
       .catch(error => console.error(error));

   const markup = repo
       .map(
           repo => `
           <li>
           <a href="${repo.html_url}">${repo.name}</a>
           ${repo.stargazers_count}
           </li>
           `
       )
       .join('');
   const content = document.getElementById('content');
   content.innerHTML = `<ul>${markup}</ul>`
};

listRepo('jlengstorf');
