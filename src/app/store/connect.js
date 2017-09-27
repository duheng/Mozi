import { connect } from "react-redux"
import { bindActionCreators } from "redux"

function mapStateToProps(props, state) {
  if (typeof props === "function") return props

  return state
}

function mapDispatchToProps(actions, dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default (selector, actions) => {
  return target =>
    connect(mapStateToProps.bind(null, selector), mapDispatchToProps.bind(null, actions), null, {
      withRef: true,
    })(target)
}
