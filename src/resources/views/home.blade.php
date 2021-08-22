@extends('layouts.app')

@section('content')
<div class="body">
    <div id="example"></div>
</div>
<div class="toast" data-autohide="false" style="position: absolute; top: 45px; right: 45px;">
    <div class="toast-header">
        <strong class="mr-auto text-primary">Обучение</strong>
        <button type="button" class="ml-2 mb-1 close" data-dismiss="toast">&times;</button>
    </div>
    <div class="toast-body athena-bg">
        <img src="/images/ap.png" class="athena">
    </div>
</div>
@endsection
