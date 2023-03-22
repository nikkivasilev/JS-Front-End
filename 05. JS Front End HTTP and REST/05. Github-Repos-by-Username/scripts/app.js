async function loadRepos() {
	const BASE_URL = `https://api.github.com/users`
	const username = document.getElementById(`username`).value
	const reposList = document.getElementById(`repos`)
	reposList.children[0].remove()
	
	try{
	const response = await(fetch(`${BASE_URL}/${username}/repos`))
	const userRepos = await response.json()
	userRepos.forEach(repo => {
		let liItem = document.createElement(`li`)
		liItem.textContent = repo.full_name
		reposList.appendChild(liItem)


	})
	}
	catch {
		let liItem = document.createElement(`li`)
		liItem.textContent = `Not Found`
		reposList.appendChild(liItem)
	}
}