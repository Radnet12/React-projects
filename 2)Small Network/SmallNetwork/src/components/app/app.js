import React, { Component } from 'react';

import AppHeader from '../app-header/app-header';
import SearchPanel from '../search-panel/search-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';
import styled from 'styled-components';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`;

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                    {label: 'Going to learn React', important: true, like: false, id: 1},
                    {label: 'React is quite interestin thing', important: false, like: false, id: 2},
                    {label: 'What will i do next?', important: false, like: false, id: 3}
                ],
            search: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const copyArr = data.slice();
            const index = copyArr.findIndex((elem) => elem.id === id);
            copyArr.splice(index, 1);
            return {
                data: copyArr
            }
        });
        
    }

    addItem(body) {
        
        const newItem = {
            label: body,
            important: false,
            id: Math.random()
        } 
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        });
    }

    onToggleImportant(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, important: !old.important};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {data: newArr}

        });
    }

    onToggleLiked(id) {
        this.setState(({data}) => {
            const index = data.findIndex((elem) => elem.id === id);

            const old = data[index];
            const newItem = {...old, like: !old.like};

            const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

            return {data: newArr}

        });
    }

    searchPost(items, search) {
        if (search.length === 0) {
            return items
        }

        return items.filter(item => {
            return item.label.indexOf(search) > -1
        });
    }

    filterPost(items, filter) {
        
        if (filter === 'like') {
            return items.filter(item => item.like);
        } else {
            return items
        }
    }

    onValueChange(term) {
        this.setState({search: term})
    }

    onFilterSelect(filter) {
        this.setState({filter})
    }

    render() {
        const {data, search, filter} = this.state;

        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, search), filter);
        console.log(this.searchPost(data, search));
        
        return (
            <AppBlock>
                <AppHeader liked={liked} allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel onValueChange={this.onValueChange.bind(this)}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilterSelect.bind(this)}/>
                </div>
                <PostList 
                    onDelete={this.deleteItem.bind(this)} 
                    posts={visiblePosts}
                    onToggleImportant={this.onToggleImportant.bind(this)}
                    onToggleLiked={this.onToggleLiked.bind(this)}
                />
                <PostAddForm
                    onAdd={this.addItem.bind(this)}
                />
            </AppBlock>
        )
    };
}