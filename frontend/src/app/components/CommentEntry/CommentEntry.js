import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import pluralize from 'pluralize'

const styles = {
  comment: {
    marginBottom: '30px',
  },
  button: {
    marginBottom: '5px',
  },
  vote: {
    color: 'rgba(0,0,0,.4)'
  }
}

const { object, bool, func } = PropTypes

CommentEntry.propTypes = {
  entry: object.isRequired,
  isUpvoteDisabled: bool.isRequired,
  isDownvoteDisabled: bool.isRequired,
  onUpvote: func.isRequired,
  onDownvote: func.isRequired,
}

export default function CommentEntry (props) {
  const { entry } = props

  return (
    <div style={styles.comment} className="comment">
      <div className="avatar">
        <button style={styles.button} disabled={props.isUpvoteDisabled} onClick={props.onUpvote} className='ui arrow up icon button'>
          <i className="arrow up icon" />
        </button>
        <button disabled={props.isDownvoteDisabled} onClick={props.onDownvote} className='ui arrow down icon button'>
          <i className="arrow down icon" />
        </button>
      </div>
      <div className="content">
        <a className="author">{entry.get('author')}</a>
        <div className="metadata">
          <span className="date">{moment(entry.get('timestamp')).fromNow()}</span>
        </div>
        <div className="text">
          {entry.get('body')}
        </div>
        <div className="actions">
          <span style={styles.vote}>{pluralize('Votes', entry.get('voteScore'), true)}</span>
        </div>
      </div>
    </div>
  )
}
