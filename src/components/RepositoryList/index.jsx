import RepositoryItem from "../RepositoryItem";

const repository = {
    name: 'anigiri',
    description: 'Anigiri in android',
    link: 'https://github.com/doginuwu/anigiri'
}

const RepositoryList = () => {
    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            
            <ul>
                <RepositoryItem repository={repository} />
            </ul>
        </section>
    );
}

export default RepositoryList;