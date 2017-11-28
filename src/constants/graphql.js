// note here might be a good place to define all queries
import gql from 'graphql-tag'

export const CONTENT_CHILDREN_QUERY =

gql`
	query ContentNode($id: String!) {
		contentNode(id: $id){
		title
		children {
			title
			id
		}
		parent {
			title
		}
	}
}
`
