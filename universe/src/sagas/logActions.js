import { take } from 'redux-saga/effects'

export default function* logActions() {
	while (true) {
		const action = yield take()
		console.log(action)
	}
}
