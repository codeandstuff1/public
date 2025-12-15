Office.onReady(function() {});

function insertUrl(url) {
    Office.context.mailbox.item.body.prependAsync(
        `<p><b>Meeting Link:</b> <a href="${url}">${url}</a></p>`,
        { coercionType: Office.CoercionType.Html },
        function (asyncResult) {
            if (asyncResult.status !== Office.AsyncResultStatus.Succeeded) {
                console.error(asyncResult.error.message);
            }
        }
    );
}