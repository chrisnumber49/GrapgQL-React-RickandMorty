import { useLazyQuery, gql } from '@apollo/client';

const getCharacters = gql`
query SearchCharacters($name: String!) {
    characters(filter:{ name: $name }) {
        results {
            id
            name
            image
        }
    }
}
`;

// useLazyQuery return a function SearchCharacters, useLazyQuery will run every time SearchCharacters is executed.
export const UseList = (name) => {
    const [SearchCharacters, { error, data, loading, called }] = useLazyQuery(getCharacters, { 
        variables: { 
            name: name
        }
    });

    return{
        SearchCharacters,
        error,
        data,
        loading,
        called
    };
}
