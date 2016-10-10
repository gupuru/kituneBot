module.exports = {
    Label: 'Lgtm',
    Dialog: function (session) {
        session.send('LGTM :kitune5:');
        session.endDialog();
    }
};