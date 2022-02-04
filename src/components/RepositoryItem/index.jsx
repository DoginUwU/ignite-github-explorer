function RepositoryItem({repository}) {
    return (
      <li>
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>

            <a href={repository.link} target="_blank">
                Acessar repositório
            </a>
        </li>
  );
}

export default RepositoryItem;