import { useQuery, gql } from '@apollo/client';

const getCharacter = gql`
query GetCharacter($id: ID!){
    character(id: $id) {
        id
        name
        image
        gender
        episode {
            name
            episode
        }
    }
}
`;

// useQuery will automatically run every time the component mounts.
export const UseDetail = (id) => {
    const { error, data, loading } = useQuery(getCharacter, {
        variables: { 
            id: id
        }
    }); 

    return{
        error,
        data,
        loading
    };
}