<?php
/**
 * Redirects received Twitter OAuth callback with access token to Chrome extension.
 *
 * @author Michal Sukupčák
 */

$requestToken = filter_input(INPUT_GET, 'oauth_token');
$requestVerifier = filter_input(INPUT_GET, 'oauth_verifier');

header('Location: chrome-extension://ohikmnjnlkoibhjbilmjmfacgomlemlg/oauth/twitter.html?requestToken=' . $requestToken . '&requestVerifier=' . $requestVerifier);