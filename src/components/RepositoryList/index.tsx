import React, { useState, useEffect } from 'react';
import { IRepository } from '../../@types/repository';
import RepositoryItem from "../RepositoryItem";

import './styles.scss';

const RepositoryList: React.FC = () => {
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/doginuwu/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>
            
            <ul>
                {repositories.map((repository) => (
                    <RepositoryItem repository={repository} key={repository.id} />
                ))}
            </ul>
        </section>
    );
}

export default RepositoryList;