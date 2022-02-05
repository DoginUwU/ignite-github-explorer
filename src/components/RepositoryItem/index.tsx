import React from 'react';
import { IRepository } from "../../@types/repository";

interface IRepositoryItemProps { 
  repository: IRepository;
}

const RepositoryItem: React.FC<IRepositoryItemProps> = ({ repository }) => {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url} target="_blank">
        Acessar repositório
      </a>
    </li>
  );
};

export default RepositoryItem;